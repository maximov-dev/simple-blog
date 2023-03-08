import { z } from 'zod';
import {SerializedResponse} from "../../../../../shared/src/lib/serialization/type";

export const loginSchema = z.object({
   accessToken: z.string(),
});

export type Login = SerializedResponse<typeof loginSchema>;
