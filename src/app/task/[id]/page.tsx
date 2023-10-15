type Params = {
  params: {
    id: string
  }
}

export default async function TaskPage({ params }: Params) {
  //   if (!data) return <div>loading...</div>

  return (
    <div>
      <h1>Task {params.id}</h1>
    </div>
  )
}
