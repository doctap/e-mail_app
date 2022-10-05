import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface IDataRequestReplaceMessage {
// 	fromFolder: {
// 		name: string,
// 		IDMessage: string,
// 	};
// 	toFolder: string;
// }

// const initialState: IDataRequestReplaceMessage = {
// 	fromFolder: {
// 		name: '',
// 		IDMessage: '',
// 	},
// 	toFolder: '',
// }

interface IModalReplaceMessage {
	isShowModalReplaceMessage: boolean;
}

const initialState: IModalReplaceMessage = {
	isShowModalReplaceMessage: false,
}

export const replaceMessageSlice = createSlice({
	name: 'replaceMessageSlice',
	initialState,
	reducers: {
		runModalWindow(state, action: PayloadAction<boolean>) {
			state.isShowModalReplaceMessage = action.payload
		},
	},
})

export default replaceMessageSlice.reducer;