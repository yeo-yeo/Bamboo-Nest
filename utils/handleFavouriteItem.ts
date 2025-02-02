import { createClient } from './supabase/client'
import updateSupabaseFavouriteItems from './updateFavouriteItems'

export default async function toggleFavourite(user: string, itemID: number) {
  const supabase = createClient()
  try {
    const { data, error } = await supabase
      .from('users')
      .select('favourite_items')
      .eq('id', user)
    const favouriteItems: number[] | null = data && data[0].favourite_items
    if (error || !data || data.length === 0) {
      throw new Error('Error fetching data')
    }
    if (!favouriteItems || favouriteItems.length === 0) {
      updateSupabaseFavouriteItems(user, [itemID])
      return
    }
    if (favouriteItems.includes(itemID)) {
      const updatedFavouriteItems = favouriteItems.filter(
        item => item !== itemID,
      )
      updateSupabaseFavouriteItems(user, updatedFavouriteItems)
      return
    }
    const updatedFavouriteItems = [...favouriteItems, itemID]
    updateSupabaseFavouriteItems(user, updatedFavouriteItems)
  } catch (error) {
    console.error(error)
  }
}
