
export default function SectionHeader({subtitle, title}: {subtitle: string; title: string}) {
  return (
    <header className="px-10 mb-6">
      <div>
        <div className="flex items-center justify-start relative h-12 gap-x-4 mb-6">
          <div className="h-full w-6 bg-secondcolor rounded-md"></div>
          <h5 className="font-bold text-secondcolor text-xl">{subtitle}</h5>
        </div>
        <h2 className="dark:text-white text-4xl uppercase font-bold text-gray-950">{title}</h2>
      </div>
      <div></div>
    </header>
  )
}
