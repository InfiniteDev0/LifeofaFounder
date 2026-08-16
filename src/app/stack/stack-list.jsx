import Link from "next/link";

export const StackList = ({ items }) => {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={item.name} className="flex items-start gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border shadow-sm ${item.className}`}
          >
            {item.icon}
          </div>
          <div>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.name}
            </Link>
            <p className="flex items-start gap-1.5 text-sm text-zinc-500 zain">
              <span aria-hidden="true">↳</span>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
