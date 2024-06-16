"use server"
import { schema, Typesaurus } from 'typesaurus'

interface Blogs {
    id: number,
    article: string
    user_id: number,
    createdAt: Typesaurus.ServerDate;
    updatedAt?: Typesaurus.ServerDate;
}

export const db = schema( ( $ ) => ({
    blogs: $.collection<Blogs>(),
} ))

export type Schema = Typesaurus.Schema<typeof db>;