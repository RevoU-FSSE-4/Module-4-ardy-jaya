import { useRouter } from 'next/router';
import PrivateRoute from './components/PrivateRoute';
import DeleteCategory from './components/DeleteCategory';

export default function DeleteCategoryPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PrivateRoute>
      <DeleteCategory id={id} />
    </PrivateRoute>
  );
}
