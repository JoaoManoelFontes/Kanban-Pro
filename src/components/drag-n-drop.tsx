'use client'

import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd'
// import { tw } from 'tw-variants'
import { useState } from 'react'

type ListItem = {
  id: string
  content: string
  status: string
}

const listItems1: Array<ListItem> = [
  { id: '1', content: 'First1: To-do', status: 'to-do' },
  { id: '2', content: 'Second1: In-progress', status: 'in-progress' },
  { id: '3', content: 'Third1: Done', status: 'done' },
]

const listItems2: Array<ListItem> = [
  { id: '1', content: 'First2: To-do', status: 'to-do' },
  { id: '2', content: 'Second2: In-progress', status: 'in-progress' },
  { id: '3', content: 'Third2: Done', status: 'done' },
]

const listItems3: Array<ListItem> = [
  { id: '1', content: 'First3: To-do', status: 'to-do' },
  { id: '2', content: 'Second3: In-progress', status: 'in-progress' },
  { id: '3', content: 'Third3: Done', status: 'done' },
]

const rearangeArr = (
  arr: Array<ListItem>,
  sourceIndex: number,
  // eslint-disable-next-line prettier/prettier
  destIndex: number
) => {
  const arrCopy = [...arr]
  const [removed] = arrCopy.splice(sourceIndex, 1)
  arrCopy.splice(destIndex, 0, removed)

  return arrCopy
}

export function DragNDrop() {
  const [items, setItems] = useState(listItems1)
  const [items2, setItems2] = useState(listItems2)
  const [items3, setItems3] = useState(listItems3)

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    if (destination.droppableId === 'list') {
      setItems(rearangeArr(items, source.index, destination.index))
    } else if (destination.droppableId === 'list2') {
      setItems2(rearangeArr(items2, source.index, destination.index))
    } else if (destination.droppableId === 'list3') {
      setItems3(rearangeArr(items3, source.index, destination.index))
    }
  }

  return (
    <>
      <h1 className="text-center m-4">Drag n` Drop</h1>
      <div className="flex items-center justify-center gap-4">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        data-done={item.status === 'done'}
                        data-in-progress={item.status === 'in-progress'}
                        data-to-do={item.status === 'to-do'}
                        className="p-4 bg-gray-100 my-2 rounded-md data-[done=true]:bg-emerald-300 data-[in-progress=true]:bg-orange-200 data-[to-do=true]:bg-red-300"
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="list2">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items2.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        data-done={item.status === 'done'}
                        data-in-progress={item.status === 'in-progress'}
                        data-to-do={item.status === 'to-do'}
                        className="p-4 bg-gray-100 my-2 rounded-md data-[done=true]:bg-emerald-300 data-[in-progress=true]:bg-orange-200 data-[to-do=true]:bg-red-300"
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="list3">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items3.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        data-done={item.status === 'done'}
                        data-in-progress={item.status === 'in-progress'}
                        data-to-do={item.status === 'to-do'}
                        className="p-4 bg-gray-100 my-2 rounded-md data-[done=true]:bg-emerald-300 data-[in-progress=true]:bg-orange-200 data-[to-do=true]:bg-red-300"
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  )
}
