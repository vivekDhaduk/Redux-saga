import {call, put, takeEvery} from 'redux-saga/effects'
import {getCatsSuccess} from './catState'

function*workgetCatsFetch() {
    const cats = yield call(()=> fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats = yield cats.json();
    const formattedcatsShortend = formattedCats.slice(0,20)
    yield put(getCatsSuccess(formattedcatsShortend))
}

function* catSaga() {
    yield takeEvery('cats/getcatsfetch', workgetCatsFetch);
}

export default catSaga

