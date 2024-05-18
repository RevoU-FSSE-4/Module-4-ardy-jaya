import Create from '../components/Create';
import PrivateRoute from '../components/PrivateRoute';

export default function NewCategoryPage() {
  return (
    <PrivateRoute>
      <Create />
    </PrivateRoute>
  );
}
