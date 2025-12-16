async function postData(endpoint, obj) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const data = await peticion.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}
export { postData }
async function postDataAutenticado(endpoint, obj) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(obj)
        })
        const data = await peticion.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}
export { postDataAutenticado }

async function getData(endpoint) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const respuesta = await peticion.json()
        return respuesta
    } catch (error) {
        console.error(error);
    }
}
export { getData }
async function getDataAutenticado(endpoint) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        const respuesta = await peticion.json()
        return respuesta
    } catch (error) {
        console.error(error);
    }
}
export { getDataAutenticado }
async function deleteData(endpoint, id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const respuesta = await peticion.json()
        return respuesta
    } catch (error) {
        console.error(error);
    }
}

export { deleteData }

async function patchData(endpoint, obj) {
  try {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const respuesta = await peticion.json();
    return respuesta;
  } catch (error) {
    console.error(error);
  }
}

export { patchData };
