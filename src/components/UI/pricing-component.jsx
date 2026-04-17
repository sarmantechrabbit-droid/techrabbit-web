import { Calendar } from "lucide-react";

function LightCheckIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="8" fill="var(--color-text-primary)" />
      <path
        d="M5.5 8.5L7 10L11 6"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DarkCheckIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7.5" stroke="rgba(255,255,255,0.3)" />
      <path
        d="M5.5 8.5L7 10L11 6"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingComponent({
  plan,
  featured = false,
}) {
  const CheckIcon = featured ? DarkCheckIcon : LightCheckIcon;

  return (
    <div
      className={[
        "rounded-3xl p-2 transition-all duration-500",
        featured
          ? "bg-[rgba(17,17,17,0.88)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] shadow-[0_12px_50px_-15px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/5"
          : "bg-white/65 backdrop-blur-md border border-[rgba(225,228,235,0.9)] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-inset ring-white/40",
      ].join(" ")}
    >
      <div
        className={[
          "rounded-2xl p-8 md:p-10 mb-2",
          featured
            ? "bg-[rgba(17,17,17,0.78)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] ring-1 ring-inset ring-white/10"
            : "bg-white/80 backdrop-blur-sm border border-[rgba(225,228,235,0.9)] ring-1 ring-inset ring-black/5",
        ].join(" ")}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg text-white mb-5"
              style={{ background: plan.iconBg }}
            >
              {plan.icon}
            </div>
            <h3
              className={[
                "text-3xl font-bold tracking-tight font-heading",
                featured ? "text-white" : "text-[var(--color-text-primary)]",
              ].join(" ")}
            >
              {plan.title}
            </h3>
            <p
              className={[
                "text-base leading-relaxed mt-1",
                featured
                  ? "text-[var(--color-text-muted)]"
                  : "text-[var(--color-text-body)]",
              ].join(" ")}
            >
              {plan.subtitle}
            </p>
          </div>
          <span
            className={[
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur whitespace-nowrap",
              featured
                ? "border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.05)] text-[var(--color-text-on-dark)]"
                : "border border-[rgba(225,228,235,0.85)] bg-white/70 text-[var(--color-text-secondary)]",
            ].join(" ")}
          >
            {featured ? "Best Value" : "Most Friendly"}
          </span>
        </div>

        <p
          className={[
            "text-sm leading-relaxed mb-8",
            featured
              ? "text-[var(--color-text-muted)]"
              : "text-[var(--color-text-body)]",
          ].join(" ")}
        >
          {plan.description}
        </p>

        <div className="flex items-baseline mb-8">
          <span
            className={[
              "text-5xl font-bold tracking-tighter font-heading",
              featured ? "text-white" : "text-[var(--color-text-primary)]",
            ].join(" ")}
          >
            {plan.price}
          </span>
          <span
            className={[
              "text-lg ml-1",
              featured
                ? "text-[var(--color-text-muted)]"
                : "text-[var(--color-text-soft)]",
            ].join(" ")}
          >
            {plan.period}
          </span>
        </div>

        <p
          className={[
            "text-xs font-semibold mb-8 uppercase tracking-[0.18em]",
            featured
              ? "text-[var(--color-text-muted)]"
              : "text-[var(--color-text-muted)]",
          ].join(" ")}
        >
          {plan.pause}
        </p>

        <button
          className={[
            "w-full rounded-xl font-semibold text-base py-4 flex items-center justify-center gap-2.5 transition-opacity duration-200",
            featured
              ? "bg-white text-[var(--color-text-primary)] shadow-[0_4px_18px_-6px_rgba(255,255,255,0.35)] ring-1 ring-inset ring-white/30 hover:opacity-95"
              : "bg-[var(--color-text-primary)] text-white shadow-[0_4px_18px_-6px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-black/10 hover:opacity-95",
          ].join(" ")}
        >
          {plan.cta}
          <Calendar
            className={[
              "w-5 h-5",
              featured ? "text-[var(--color-text-body)]" : "text-white/70",
            ].join(" ")}
          />
        </button>
      </div>

      <div
        className={[
          "px-6 pb-6 pt-4 rounded-2xl",
          featured
            ? "bg-[rgba(17,17,17,0.72)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] ring-1 ring-inset ring-white/10"
            : "bg-white/50 backdrop-blur-sm border border-[rgba(225,228,235,0.8)] ring-1 ring-inset ring-white/30",
        ].join(" ")}
      >
        <p
          className={[
            "text-sm font-bold mb-5",
            featured ? "text-white" : "text-[var(--color-text-primary)]",
          ].join(" ")}
        >
          What's included:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckIcon className="w-4 h-4 flex-shrink-0" />
              <span
                className={[
                  "text-sm font-medium",
                  featured
                    ? "text-[var(--color-text-on-dark)]"
                    : "text-[var(--color-text-secondary)]",
                ].join(" ")}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
