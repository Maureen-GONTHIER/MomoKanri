import { useState } from 'react';

type Column = {
  id: string;
  title: string;
  isEditing: boolean;
};

const initialColumns: Column[] = [
  { id: 'todo', title: 'To Do', isEditing: false },
  { id: 'in-progress', title: 'In Progress', isEditing: false },
  { id: 'done', title: 'Done', isEditing: false },
];

export default function KanbanBoard () 
{
  const [columns, setColumns] = useState(initialColumns);

  // Fonction pour basculer en mode édition
  const toggleEdit = (id: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === id ? { ...col, isEditing: !col.isEditing } : col
      )
    );
  };

  // Fonction pour modifier le titre
  const updateTitle = (id: string, newTitle: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === id ? { ...col, title: newTitle, isEditing: false } : col
      )
    );
  };

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      {columns.map((column) => (
        <div key={column.id} style={{ width: '300px', border: '1px solid #ccc', padding: '16px' }}>
          {/* Titre modifiable */}
          {column.isEditing ? (
            <input
              type="text"
              value={column.title}
              autoFocus
              onChange={(e) => updateTitle(column.id, e.target.value)}
              onBlur={() => toggleEdit(column.id)} // Sortir du mode édition après avoir cliqué en dehors
            />
          ) : (
            <h2 onClick={() => toggleEdit(column.id)} style={{ cursor: 'pointer' }}>
              {column.title}
            </h2>
          )}
        </div>
      ))}
    </div>
  );
};
