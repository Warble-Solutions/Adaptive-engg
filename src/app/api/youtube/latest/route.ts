import { NextResponse } from "next/server";

export async function GET() {
  try {
    const channelId = "UCXXx_3j3hYUxzHeo5IHL12A";
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch RSS feed");
    }
    
    const xmlText = await res.text();
    
    // Simple robust regex parsing of entries in Atom Feed
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const videoIdRegex = /<yt:videoId>([^<]+)<\/yt:videoId>/;
    const titleRegex = /<title>([^<]+)<\/title>/;
    const publishedRegex = /<published>([^<]+)<\/published>/;

    interface VideoItem {
      id: string;
      title: string;
      published: string;
    }

    const videos: VideoItem[] = [];
    let match;
    
    while ((match = entryRegex.exec(xmlText)) !== null) {
      const entryContent = match[1];
      const videoIdMatch = entryContent.match(videoIdRegex);
      const titleMatch = entryContent.match(titleRegex);
      const publishedMatch = entryContent.match(publishedRegex);
      
      if (videoIdMatch && titleMatch) {
        videos.push({
          id: videoIdMatch[1],
          title: titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/, '$1'),
          published: publishedMatch ? publishedMatch[1] : ""
        });
      }
    }
    
    return NextResponse.json({ success: true, videos });
  } catch (error: any) {
    console.error("YouTube Fetch Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
