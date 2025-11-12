function PropsCards({ data }) {
  const labelClass = "text-sm text-[#475569] font-medium";
  const valueClass = "mt-1 text-lg font-semibold text-[#1e293b]";
  const cardBg = "bg-[#f9fafb] border border-[#cbd5e1] shadow-md";
  const hoverEffect =
    "transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5";

  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const empName = data.name || "Employee Name";
  const empRole = data.role || "Official Information";
  const empId = data.id || "N/A";
  const empAge = data.age || "-";
  const empSalary = data.salary || "-";
  const empEmail = data.email || "not@provided.com";

  return (
    <div
      className={`w-full max-w-[520px] m-6 p-6 rounded-2xl text-left font-[Poppins] ${cardBg} ${hoverEffect}`}
      aria-label={`Employee Card for ${empName}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center bg-[#e0f2fe] border border-[#b0bec5] text-[#1e293b] text-2xl font-semibold shadow-inner"
            aria-hidden="true"
          >
            {empName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#0f172a] leading-tight tracking-wide">
              {empName}
            </h1>
            <p className="mt-1 text-sm text-[#475569] font-normal">{empRole}</p>
          </div>
        </div>
        <div className="w-10 h-10 rounded-md bg-[#f1f5f9] border border-[#d1d5db] flex items-center justify-center text-sm font-semibold text-[#3b82f6]">
          ID
        </div>
      </div>

      {/* Body */}
      <div className="space-y-4 text-[#1e293b]">
        <div className="flex justify-between">
          <div>
            <p className={labelClass}>Emp. ID</p>
            <p className={valueClass}>{empId}</p>
          </div>
          <div className="text-right">
            <p className={labelClass}>Age</p>
            <p className={valueClass}>{empAge}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className={labelClass}>Name</p>
            <p className={valueClass}>{empName}</p>
          </div>
          <div className="text-right">
            <p className={labelClass}>Salary</p>
            <p className={valueClass}>{empSalary}</p>
          </div>
        </div>
        <div>
          <p className={labelClass}>Email</p>
          <p className="mt-1 text-base font-medium wrap-break-word">{empEmail}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between text-sm text-[#64748b]">
        <span>Verified • ID #{empId}</span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}

export default PropsCards;
