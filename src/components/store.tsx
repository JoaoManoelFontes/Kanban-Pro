import { Data } from '@/types/data'
import { Separator } from './ui/separator'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import Link from 'next/link'

type Props = {
  data: Data
}

export function Store({ data }: Props) {
  return (
    <Droppable droppableId={data.id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div>
            <h3>{data.name}</h3>
          </div>
          <Separator className="my-2 bg-slate-600" />
          <div className="flex flex-col gap-2">
            {data.items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    key={item.id}
                    className="border-solid border-2 border-slate-800 text-center rounded-md p-2 "
                  >
                    <Link href={`/task/` + item.id}>
                      <h4>{item.title}</h4>
                    </Link>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}
