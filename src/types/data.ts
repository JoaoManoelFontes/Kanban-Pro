export type Item = {
  id: string
  title: string
  content: string
  markAsDone: boolean
  markAsMaking: boolean
  userId: string
}

export type Data = {
  id: string
  name: string
  items: Array<Item>
}

export const data: Array<Data> = [
  {
    id: '0e2f0db1-5457-46b0-949e-8032d2f9997a',
    name: 'To-do',
    items: [],
  },
  {
    id: '487f68b4-1746-438c-920e-d67b7df46247',
    name: 'Progress',
    items: [],
  },
  {
    id: '25daffdc-aae0-4d73-bd31-43f73101e7c0',
    name: 'Done',
    items: [],
  },
]
