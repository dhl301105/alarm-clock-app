import Card from "./Card"

const Alarm: React.FC = () => {
  return (
    <div className="flex flex-wrap p-5 gap-5">
      <Card title="Good Morning"/>
      <Card title="Alarm"/>
    </div>
  )
}

export default Alarm
