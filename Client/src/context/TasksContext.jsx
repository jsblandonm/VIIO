import { createContext, useContext, useState } from "react";
import {
  createTasksRequest,
  getTasksRequest,
  deleteTasksRequest,
  getTaskRequest,
  updateTasksRequest,
} from "../api/tasks";

// Crear un contexto para las tareas
const TaskContext = createContext();

// Hook personalizado para acceder al contexto de tareas
export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

// Proveedor de contexto para gestionar el estado y las funciones relacionadas con las tareas
export function TaskProvider({ children }) {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Función para obtener todas las tareas
  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Función para crear una nueva tarea
  const createTask = async (task) => {
    const res = await createTasksRequest(task);
    console.log(res);
  };

  // Función para eliminar una tarea por su ID
  const deleteTasks = async (id) => {
    try {
      const res = await deleteTasksRequest(id);
      if (res.status === 204) {
        // Si la eliminación es exitosa, actualiza el estado eliminando la tarea correspondiente
        setTasks(tasks.filter((task) => task._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Función para obtener detalles de una tarea por su ID
  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Función para actualizar una tarea por su ID
  const updateTask = async (id, task) => {
    try {
      await updateTasksRequest(id, task);
    } catch (error) {
      console.log(error);
    }
  };

  // Proporcionar el contexto de tareas y renderizar los componentes hijos
  return (
    <TaskContext.Provider
      value={{
        tasks, // Lista de tareas
        createTask, // Función para crear una nueva tarea
        getTasks, // Función para obtener todas las tareas
        deleteTasks, // Función para eliminar una tarea por su ID
        getTask, // Función para obtener detalles de una tarea por su ID
        updateTask, // Función para actualizar una tarea por su ID
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
