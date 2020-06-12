import React, { useState }from 'react';
import MaterialTable from 'material-table';
import Paper from '@material-ui/core/Paper';
const IngredientSelector = ({handleIngredientChange}) => {
  const [state, setState] = useState({
    columns: [
      { title: 'Ingredient', field: 'ingredient' },
      { title: 'Quantity', field: 'quantity', type: 'numeric'}
    ],
    data: []
  });

  return (
    <div>
      <MaterialTable
        components={{
          // eslint-disable-next-line react/display-name
          Container: props => <Paper {...props} elevation={0} />
        }}
        title="Ingredients List"
        columns={state.columns}
        data={state.data}
        localization={{
          body: {
            editRow: { deleteText: 'Delete this ingredient?' },
            emptyDataSourceMessage: 'No ingredients to display'
          },
          header: {
            actions: ''
          }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  handleIngredientChange(data)
                  return { ...prevState, data };
                });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    handleIngredientChange(data)
                    return { ...prevState, data };
                  })
                }
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  handleIngredientChange(data)
                  return { ...prevState, data };
                })
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
