import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'medias',
      type: 'join',
      collection: 'media',
      on: 'user',
    },
  ],
}
