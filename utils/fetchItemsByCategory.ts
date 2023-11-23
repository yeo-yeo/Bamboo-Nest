import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export default async function fetchItemsByCategory(category: string) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase
    .from('categories')
    .select(`items(*)`)
    .eq('category_name', category)

  if (!data || error) {
    return []
  }

  return data[0].items
}