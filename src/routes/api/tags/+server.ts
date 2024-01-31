import type { RequestHandler } from "./$types"
import { Tags, type TagsType } from "$lib/types/types"
import { json } from "@sveltejs/kit"

const tags: TagsType[] = [...Object.values(Tags)]

export const GET: RequestHandler = async () => {
  return json(tags, { status: 200 })
}
