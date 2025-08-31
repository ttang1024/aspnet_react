const API_URL = 'http://localhost:5299/api/todos'

// Fetch all todos
export const getTodos = async () => {
	const response = await fetch(API_URL)
	if (!response.ok) {
		throw new Error('Failed to fetch todos')
	}
	return await response.json()
}

// Create a new todo
export const createTodo = async todo => {
	const response = await fetch(API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(todo),
	})

	if (!response.ok) {
		throw new Error('Failed to create todo')
	}

	return await response.json()
}

// Update an existing todo
export const updateTodo = async (id, todo) => {
	const response = await fetch(`${API_URL}/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(todo),
	})

	if (!response.ok) {
		throw new Error('Failed to update todo')
	}

	return response
}

// Delete a todo
export const deleteTodo = async id => {
	const response = await fetch(`${API_URL}/${id}`, {
		method: 'DELETE',
	})

	if (!response.ok) {
		throw new Error('Failed to delete todo')
	}

	return response
}
