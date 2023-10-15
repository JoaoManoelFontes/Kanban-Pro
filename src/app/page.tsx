import { ShoppingList } from '@/components/shopping-list'
import { Separator } from '@/components/ui/separator'
import { api } from '@/lib/api'
import { data, Item } from '@/types/data'

export default async function Home() {
  const user = await api.post('/user/auth', {
    email: 'jmanufontesc@gmail.com',
    password: 'gunsforever',
  })

  const tasks = await api.get('/task', {
    headers: {
      Authorization: `Bearer ${user.data.token}`,
    },
  })

  const done: Array<Item> = []
  const inProgress: Array<Item> = []
  const todo: Array<Item> = []

  tasks.data.forEach((element: Item) => {
    if (element.markAsDone) {
      done.splice(0, 0, element)
    } else if (element.markAsMaking) {
      inProgress.splice(0, 0, element)
    } else {
      todo.splice(0, 0, element)
    }
  })

  data[0].items = todo
  data[1].items = inProgress
  data[2].items = done

  return (
    <main className="mb-20">
      <div>
        <h1>Drag n` Drop</h1>
      </div>
      <Separator className="my-2 bg-slate-900" />
      <div className="flex gap-2 p-5">
        <ShoppingList data={data} />
      </div>
    </main>
  )
}
