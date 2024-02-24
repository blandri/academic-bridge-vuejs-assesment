async function getAllTodos() {
  try {
    const response = await fetch('https://dummyjson.com/todos/user/7')
    const data = await response.json()

    return data.todos
  } catch (error) {
    console.error('Error fetching todos:', error)
  }
}

async function createTodos(newTodo) {
  try {
    const response = await fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newTodo,
        userId: 7
      })
    })
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching todos:', error)
  }
}

async function updatesTodo(id, newData) {
  try {
    const response = fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newData
      })
    })
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching todos:', error)
  }
}

function deletesTodo(id) {
  const response = fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'DELETE'
  })
    .then((res) => res.json())
    .then((data) => data)

  return response
}

export { deletesTodo, updatesTodo, createTodos, getAllTodos }
