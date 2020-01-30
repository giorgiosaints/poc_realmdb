import Realm from 'realm';

import RepositorySchema from '~/schemas/RepositorySchema';

// Abrindo conexão com o realm db
export default function getRealm() {
    return Realm.open({
        schema: [RepositorySchema],
    });
}