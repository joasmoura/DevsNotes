const initialState = {
    list: [
        { title: 'Primeita nota', body: 'Texto da nota' },
    ]
};
export default (state = initialState, action) => {
    let new_list = [...state.list];

    switch (action.type) {
        case 'ADD_NOTE':
            new_list.push(action.payload);
        break;

        case 'EDIT_NOTE':
            if (new_list[action.payload.key]){
                new_list[action.payload.key] = {
                    title: action.payload.title,
                    body: action.payload.body
                }
            }
        break;

        case 'DELETE_NOTE':
            new_list = new_list.filter((item, index) => index != action.payload.key);
        break;
    }
    return { ...state, list: new_list };
}