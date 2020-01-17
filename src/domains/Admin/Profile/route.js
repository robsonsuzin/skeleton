import { crud, group } from 'src/app/Util/routing'
import { domain, path } from './settings'

/**
 * @returns Array<RouteConfig>
 */
export default () => {
  // index
  const index = () => import('src/layouts/Group.vue')
  // table
  const table = () => import('src/views/dashboard/admin/profile/ProfileTable.vue')
  // form
  const form = () => import('src/views/dashboard/admin/profile/ProfileForm.vue')

  const children = crud(domain, path, table, form)
  const meta = { namespace: domain, scope: 'group' }
  return [
    group(path, index, children, meta)
  ]
}
