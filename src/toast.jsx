import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import styles from './index.module.scss'
import { lsKey } from './constant'

export const Toast = () => {
  useEffect(() => {
    const lastDisplayDate = localStorage.getItem(lsKey)
    let isShow = true
    const d = new Date()
    const nowDate = d.getDate()
    if (lastDisplayDate && lastDisplayDate === nowDate.toString()) {
      isShow = false
    }
    if (!isShow) {
      return
    }
    toast(
      <div
        style={{
          fontSize: 13
        }}
      >
        <div className={styles.wrapper}>
          <div>{window._opq_toastTitle}</div>
          <div className={styles.upgrade}>
            <a href={window._opq_link}>{window._opq_toastContent}</a>
          </div>
        </div>
      </div>,
      {
        autoClose: 1000 * 10,
        closeOnClick: false,
        pauseOnHover: true,
        onClose: () => {
          localStorage.setItem(lsKey, nowDate)
        }
      }
    )
  }, [])

  return <ToastContainer />
}
