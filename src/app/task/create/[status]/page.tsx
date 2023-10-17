'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ArrowBigLeft } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

type Params = {
  params: {
    status: 'todo' | 'in-progress' | 'done'
  }
}

export default function CreateTaskPage({ params }: Params) {
  //   if (!data) return <div>loading...</div>

  return (
    <div className="flex flex-col gap-4 bg-slate-300 shadow-lg rounded-lg p-5 w-3/6">
      <div className="flex flex-col">
        <a href="/" className="flex items-center gap-2">
          <ArrowBigLeft />
          <span>Voltar</span>
        </a>
        <h1 className="text-center underline ">Create {params.status} Task</h1>
      </div>
      <Separator className=" bg-slate-900" />
      <form className="flex flex-1 flex-col gap-4 rounded-lg border-opacity-10 p-4 ">
        <div className="flex flex-col gap-2 py-2">
          <label htmlFor="title" className="text-sm tracking-widest ">
            Título
          </label>
          <Input
            type="text"
            placeholder="Digite um título para sua task..."
            className=" border-zinc-800"
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <label htmlFor="description" className="text-sm tracking-widest ">
            Descrição
          </label>
          <Textarea
            placeholder="Digite uma descrição para sua task..."
            className="border-zinc-800"
            rows={6}
          />
        </div>
        <div className="flex items-center justify-center gap-2 py-2">
          <Button variant="outline" type="submit" className=" w-32">
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  )
}
