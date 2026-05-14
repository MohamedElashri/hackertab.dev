import { MdAccessTime } from 'react-icons/md'
import { CardItemWithActions, CardLink } from 'src/components/Elements'
import { Article, BaseItemPropsType } from 'src/types'
import { format } from 'timeago.js'

const ArticleItem = (props: BaseItemPropsType<Article>) => {
  const { item, analyticsTag } = props

  return (
    <CardItemWithActions
      source={analyticsTag}
      sourceType="rss"
      item={item}
      cardItem={
        <>
          <p className="rowTitle">
            <CardLink link={item.url}>
              <span className="subTitle">{item.title}</span>
            </CardLink>
          </p>
          <p className="rowDescription">
            <span className="rowItem" title={new Date(item.published_at).toUTCString()}>
              <MdAccessTime className="rowTitleIcon" />
              {format(new Date(item.published_at))}
            </span>
          </p>
        </>
      }
    />
  )
}

export default ArticleItem
