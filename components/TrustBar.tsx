const stats = [
  { value: "24hr", label: "Demo turnaround" },
  { value: "5+", label: "Industries served" },
  { value: "100%", label: "Columbus focused" },
  { value: "$0", label: "Cost to see your demo" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/8 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
            <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
