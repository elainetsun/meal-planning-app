import React from 'react';
import styles from './IngredientSelector.module.scss';
import MaterialTable from 'material-table';
const IngredientSelector = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Ingredient', field: 'ingredient' },
      { title: 'Quantity', field: 'quanitiy', type: 'numeric' }
    ],
    data: [{ ingredient: 'Carrot', quanitiy: 1 }]
  });

  return (
    <div className={styles.table}>
      <MaterialTable
        title="Ingredients List"
        columns={state.columns}
        data={state.data}
        localization={{
          body: {
            editRow: { deleteText: 'Delete this row?' },
            emptyDataSourceMessage: ''
          },
          header: {
            actions: ''
          }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 300);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 300);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 300);
            })
        }}
        options={{
          search: false,
          paging: false,
          actionsColumnIndex: -1
        }}
      />
    </div>
  );
};

export default IngredientSelector;
