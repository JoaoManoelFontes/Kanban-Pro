'use client'

import { useState } from 'react'
import { tv } from 'tailwind-variants'
import { Separator } from './ui/separator'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { data } from '@/utils/data'
import { Store } from './store'

// ? Item style variants
const item = tv({
  base: 'rounded-lg px-4 w-full py-2 text-left text-slate-900',
  variants: {
    status: {
      default: 'bg-slate-400',
      active: 'bg-slate-300',
      inactive: 'bg-slate-300',
    },
  },
  defaultVariants: {
    status: 'default',
  },
})

export function ShoppingList() {
  const [stores, setStores] = useState(data)

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return

    const itemSourceIndex = source.index
    const itemDestinationIndex = destination.index

    const storeSourceIndex = stores.findIndex(
      // eslint-disable-next-line prettier/prettier
      (store) => store.id === source.droppableId
    )
    const storeDestinationIndex = stores.findIndex(
      // eslint-disable-next-line prettier/prettier
      (store) => store.id === destination.droppableId
    )

    const newSourceItems = [...stores[storeSourceIndex].items]

    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1)
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem)

    const newStores = [...stores]

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems,
    }
    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems,
    }

    setStores(newStores)
  }

  return (
    <main>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div>
          <h1>Drag n` Drop</h1>
        </div>
        <Separator className="my-2 bg-slate-900" />
        <div className="flex gap-2 p-5">
          {stores.map((store) => (
            <div key={store.id} className={item({ status: store.status })}>
              <Store data={store} />
            </div>
          ))}
        </div>
      </DragDropContext>
    </main>
  )
}
