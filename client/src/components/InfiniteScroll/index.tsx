import React from 'react'

import isScrollEnd from 'utils/isScrollEnd'

import config from 'global/config'
import { debounce } from 'throttle-debounce'

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
}

class InfiniteScroll extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      data: [],
      // Only the ids of each data content
      dataIds: [],
      cursor: 0,
    }

    this.handleScroll = this.handleScroll.bind(this)

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
    const { cursor, dataIds, data } = this.state

    const { fetchPartialData, fetchOffset = FETCH_OFFSET } = this.props


    fetchPartialData(cursor, fetchOffset, dataIds)
      .then((payload: any) => {
        const newData = data.concat(payload)

        this.setState({ data: newData, cursor: cursor + fetchOffset })
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

    document.addEventListener('scroll', debounce(250, () => this.handleScroll))
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', debounce(250, () => this.handleScroll))
  }

  render() {
    const { data } = this.state

    return (
      // @ts-ignore
      React.cloneElement(this.props.children, { data })
    )
  }

}

export default InfiniteScroll
