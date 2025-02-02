import fetchItemsBySeller from '@/utils/fetchItemsBySeller'
import { ItemWithImage } from '@/utils/types'
import ItemCard from '@/components/ItemCard'
import getUser from '@/utils/getUser'

export default async function ListingHistory({ id = '' }) {
  const { user, supabase } = await getUser()
  const userID = (await user?.id) || ''

  if (id === '') id = userID

  const itemDetails: ItemWithImage[] = await fetchItemsBySeller(supabase, id)

  return itemDetails.length > 0 ? (
    <div className="flex flex-col gap-4 py-16">
      <div className="grid grid-cols-2 gap-4">
        {itemDetails.map(item => (
          <div key={item.item_id}>
            <ItemCard
              linkHref={`/item/${item.item_id}`}
              cardName={item.name}
              cardPrice={item.price}
              cardImgSrc={item.image_path}
              cardImgAlt={`image of ${item.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h2>No items listed yet</h2>
    </div>
  )
}
