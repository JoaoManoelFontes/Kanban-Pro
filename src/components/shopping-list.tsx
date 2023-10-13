'use client'

import { useState } from 'react'
import { tv } from 'tailwind-variants'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { Data } from '@/types/data'
import { Store } from './store'

// ? Item style variants
const item = tv({
  base: 'rounded-lg px-4 w-full py-2 text-left text-slate-900',
  variants: {
    status: {
      'to-do': 'bg-red-300',
      'in progress': 'bg-orange-200',
      done: 'bg-emerald-300',
    },
  },
})

type StoreProps = {
  data: Array<Data>
}

export function ShoppingList({ data }: StoreProps) {
  const [stores, setStores] = useState(data)

  const handleOnDragEnd = async (result: DropResult) => {
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
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div key={stores[0].id} className={item({ status: 'to-do' })}>
        <Store data={stores[0]} />
      </div>
      <div key={stores[1].id} className={item({ status: 'in progress' })}>
        <Store data={stores[1]} />
      </div>
      <div key={stores[2].id} className={item({ status: 'done' })}>
        <Store data={stores[2]} />
      </div>
    </DragDropContext>
  )
}
