import Link from 'next/link';

interface ActionProps {
    type: 'download' | 'connect';
    label: string;
    subLabel?: string; // Used for "PDF - 2MB" or similar details
    href: string;
}

export default function ActionBadge({ type, label, subLabel, href }: ActionProps) {

    if (type === 'download') {
        return (
            <a href={href} className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-[#0da08a] border-primary/50 hover:bg-white/10 transition-all group cursor-pointer w-fit backdrop-blur-sm">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-xs text-gray-400 group-hover:bg-[#0da08a] text-primary transition-colors">
                    <i className="fas fa-file-arrow-down"></i>
                </div>
                <div className="text-left">
                    {subLabel && <div className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:bg-[#0da08a] text-gray-400 transition-colors">{subLabel}</div>}
                    <div className="text-xs font-bold text-gray-300 group-hover:bg-[#0da08a] transition-colors">{label}</div>
                </div>
            </a>
        );
    }

    // Type: 'connect' (The Kinetic Link)
    return (
        <Link href={href} className="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:bg-[#0da08a] text-primary transition-colors cursor-pointer w-fit">
            <span>{label}</span>
            <i className="fas fa-arrow-right text-xs -translate-x-2 opacity-0 group-hover:bg-[#0da08a] opacity-100 group-hover:bg-[#0da08a] translate-x-0 transition-all duration-300"></i>
        </Link>
    );
}
