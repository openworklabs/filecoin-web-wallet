import { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import {
  fetchedConfirmedMessagesSuccess,
  fetchedConfirmedMessagesFailure,
  fetchingConfirmedMessages,
  fetchingNextPage
} from '../../../store/actions'
import { FILSCOUT } from '../../../constants'
import { formatFilscoutMessages } from './formatMessages'
import useWallet from '../../../WalletProvider/useWallet'

export default () => {
  const { address } = useWallet()
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const {
    loading,
    loadedSuccess,
    loadedFailure,
    pending,
    confirmed,
    total,
    paginating
  } = useSelector(state => {
    return {
      ...state.messages,
      confirmed: state.messages.confirmed.map(message => ({
        ...message,
        status: 'confirmed'
      })),
      pending: state.messages.pending.map(message => ({
        ...message,
        status: 'pending'
      }))
    }
  })

  const fetchInitialData = useCallback(
    async (address, page = 1) => {
      try {
        const { data } = await axios.get(
          `${FILSCOUT}/message/list?address=${address}&page=${page}&page_size=15`
        )

        if (data.code !== 200) {
          dispatch(
            fetchedConfirmedMessagesFailure(
              new Error('Error fetching from Filscout: ', data.error)
            )
          )
        } else {
          setPage(Number(data.data.pagination.page) + 1)
          const formattedMessages = formatFilscoutMessages(data.data.data)
          dispatch(
            fetchedConfirmedMessagesSuccess(
              formattedMessages,
              Number(data.data.pagination.total)
            )
          )
        }
      } catch (err) {
        dispatch(fetchedConfirmedMessagesFailure(new Error(err.message)))
      }
    },
    [dispatch]
  )

  const showMore = () => {
    dispatch(fetchingNextPage())
    fetchInitialData(address, page)
  }

  useEffect(() => {
    if (!loading && !loadedFailure && !loadedSuccess) {
      dispatch(fetchingConfirmedMessages())
      fetchInitialData(address)
    }
  }, [
    address,
    total,
    confirmed.length,
    loading,
    loadedFailure,
    loadedSuccess,
    page,
    fetchInitialData,
    dispatch
  ])

  return {
    loading,
    loadedSuccess,
    loadedFailure,
    pending,
    confirmed,
    showMore,
    paginating,
    total,
    page
  }
}
