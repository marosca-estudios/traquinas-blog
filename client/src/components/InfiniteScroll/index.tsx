import React from 'react'
import isScrollEnd from 'utils/isScrollEnd'
import config from 'global/config'
import { debounce } from 'throttle-debounce'
import Spinner from 'components/Spinner'
import { Wrapper } from './styled'

const FETCH_OFFSET = config.posts.offset

type Props = {
  /** Callback to fetch only the ids of the data set */
  fetchIds: Function,
  /** Callback to fetch a portion of the data set */
  fetchPartialData: Function,
  /** The amount of data to fetch every time user scrolls */
  fetchOffset?: number,
  /** The component to receive the data */
  children: React.ReactChild | React.ReactNode,
}

type State = {
  data: Array<any>,
  dataIds: Array<string>,
  cursor: number,
  isLoading: boolean,
}

class InfiniteScroll extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      data: [],
      // Only the ids of each data content
      dataIds: [],
      cursor: 0,
      isLoading: true,
    }

    this.handleScroll = debounce(1000, this.handleScroll.bind(this))

    this.fetchDataIds = this.fetchDataIds.bind(this)

    this.loadMore = this.loadMore.bind(this)
  }

  fetchDataIds() {
    this.props.fetchIds()
      .then((payload: any) => this.setState({
        dataIds: payload.items,
      }))
      .then(() =>
        this.loadMore()
      )
  }

  loadMore() {
    this.setState({ isLoading: true })

    const { cursor, dataIds, data } = this.state
    const { fetchPartialData, fetchOffset = FETCH_OFFSET } = this.props

    fetchPartialData(cursor, fetchOffset, dataIds)
      .then((payload: any) => {
        const newData = data.concat(payload)

        this.setState({
          data: newData,
          cursor: cursor + fetchOffset,
          isLoading: false,
        })
      })
  }

  handleScroll(event: any) {
    if (!isScrollEnd(event.target.scrollingElement)) {
      return
    }

    this.loadMore()
  }

  componentDidMount() {
    this.fetchDataIds()

    document.addEventListener('scroll', this.handleScroll)

  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)

  }

  render() {
    const { data, isLoading } = this.state

    // @ts-ignore
    const C = () => React.cloneElement(this.props.children, { data })

    const isFirstFetch = !data || !data.length
    const isFetchingMore = data && data.length && isLoading

    return (
      <Wrapper>
        {isFirstFetch ? <Spinner /> : null}
        <C />
        {isFetchingMore ? <Spinner /> : null}
      </Wrapper>
    )
  }

}

export default InfiniteScroll
