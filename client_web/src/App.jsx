import { Route, Routes } from 'react-router-dom'
import { common, pathAdmin, pathCreator } from './utils/path'
import { Login, CheckLogin, DetailEvent } from './pages/common'
import {
	AdminLayout,
	ManageEvent,
	ManageUser,
	Calendar,
	UserDetail,
	EventDetail,
	Chart,
} from './pages/admin'
import { CreateEvent, CreatorLayout, ListEvent } from './pages/creator'
import { useSelector } from 'react-redux'
import { Modal } from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import moment from 'moment/moment'
import 'moment/locale/vi'

moment.locale('vi')

function App() {
	const { isShowModal, modalChildren } = useSelector(state => state.app)
	return (
		<div className='font-main relative'>
			{isShowModal && <Modal>{modalChildren}</Modal>}
			<Routes>
				<Route path={'/'} element={<CheckLogin />} />
				<Route path={common.LOGIN} element={<Login />} />
				<Route path={pathAdmin.ADMIN} element={<AdminLayout />}>
					<Route path={pathAdmin.CALENDAR} element={<Calendar />} />
					<Route path={common.DASHBOARD} element={<Chart />} />
					<Route path={pathAdmin.MANAGE_EVENT} element={<ManageEvent />} />
					<Route path={pathAdmin.MANAGE_USERS} element={<ManageUser />} />
					<Route
						path={`${pathAdmin.USERDETAIL}/:id`}
						element={<UserDetail />}
					/>
					<Route path={`${common.EVENTDETAIL}`} element={<EventDetail />} />
				</Route>
				<Route path={pathCreator.CREATOR} element={<CreatorLayout />}>
					<Route path={pathCreator.CREATE_EVENT} element={<CreateEvent />} />
					<Route path={pathCreator.LIST_EVENT} element={<ListEvent />} />
					<Route path={common.DETAILEVENT_EID} element={<DetailEvent />} />
				</Route>
			</Routes>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{/* Same as */}
			<ToastContainer />
		</div>
	)
}

export default App
