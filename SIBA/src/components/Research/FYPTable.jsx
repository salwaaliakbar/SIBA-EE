function MemberList({ members, className = "" }) {
	return <ul className={`space-y-1 ${className}`}>{members.map((member) => <li key={member}>{member}</li>)}</ul>;
}

export default function FYPTable({ batch }) {
	const { label, projects, showEvaluator } = batch;
	const headers = ["No.", "Supervisor", "Co-Supervisor", "Project title", "Group members", ...(showEvaluator ? ["Evaluator"] : [])];
	const widths = showEvaluator ? ["6%", "16%", "16%", "28%", "20%", "14%"] : ["7%", "19%", "19%", "31%", "24%"];

	return (
		<>
			<div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
				<div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a2a5e]">Project archive</p><h2 className="mt-2 font-serif text-3xl font-bold text-[#071f47] sm:text-4xl">{label}</h2></div>
				<p className="text-sm font-medium text-slate-500">{projects.length} project groups</p>
			</div>
			<div className="hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_10px_28px_-24px_rgba(15,23,42,0.4)] md:block">
				<table className="w-full table-fixed border-collapse text-left text-sm">
					<colgroup>{widths.map((width, i) => <col key={i} style={{ width }} />)}</colgroup>
					<thead className="bg-sky-50/80 text-xs uppercase tracking-[0.12em] text-slate-600">
						<tr>{headers.map((header, i) => <th key={header} className={`px-3 py-4 ${i < headers.length - 1 ? "border-r border-sky-100" : ""}`}>{header}</th>)}</tr>
					</thead>
					<tbody className="divide-y divide-slate-100">
						{projects.map((project, index) => (
							<tr key={project.title} className="align-top odd:bg-white even:bg-slate-50/45 transition-colors hover:bg-amber-50/45">
								<td className="wrap-break-word border-r border-slate-100 px-3 py-5 font-serif text-xl font-bold text-amber-600">{index + 1}</td>
								<td className="wrap-break-word border-r border-slate-100 px-3 py-5 font-semibold leading-6 text-[#071f47]">{project.supervisor}</td>
								<td className="wrap-break-word border-r border-slate-100 px-3 py-5 leading-6 text-slate-600">{project.coSupervisor || "-"}</td>
								<td className="wrap-break-word border-r border-slate-100 px-3 py-5 font-medium leading-6 text-slate-700">{project.title}</td>
								<td className={`wrap-break-word px-3 py-5 leading-6 text-slate-600 ${showEvaluator ? "border-r border-slate-100" : ""}`}><MemberList members={project.members} /></td>
								{showEvaluator && <td className="wrap-break-word px-3 py-5 leading-6 text-slate-600">{project.evaluator || "-"}</td>}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="space-y-3 md:hidden">
				{projects.map((project, index) => (
					<article key={project.title} className="border border-slate-200 bg-white p-4 shadow-sm">
						<div className="flex items-start gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center bg-amber-400 font-serif font-bold text-[#071f47]">{index + 1}</span><h3 className="wrap-break-word pt-1 text-sm font-bold leading-5 text-[#071f47]">{project.title}</h3></div>
						<div className="mt-4 grid gap-3 border-t border-slate-100 pt-4 text-sm leading-5">
							<div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Supervisor</p><p className="mt-1 font-semibold text-slate-700">{project.supervisor}</p></div>
							<div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Co-Supervisor</p><p className="mt-1 text-slate-600">{project.coSupervisor || "-"}</p></div>
							<div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Group members</p><MemberList members={project.members} className="mt-1 text-slate-600" /></div>
							{showEvaluator && <div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Evaluator</p><p className="mt-1 text-slate-600">{project.evaluator || "-"}</p></div>}
						</div>
					</article>
				))}
			</div>
		</>
	);
}
