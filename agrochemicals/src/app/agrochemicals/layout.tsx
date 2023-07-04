export const metadata = {
  title: 'Agrochemicals',
  description: 'Agrochemical layout',
}



export default function AgrochemicalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='agrochemicals'>{children} </div>
  )
}