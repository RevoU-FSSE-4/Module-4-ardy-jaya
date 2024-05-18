import EditCategory from '/components/EditCategory';
import { useRouter } from 'next/router';
import PrivateRoute from './components/PrivateRoute';

export default function EditCategoryPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PrivateRoute>
      <EditCategory id={id} />
    </PrivateRoute>
  );
}
