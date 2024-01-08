import { useEffect, useState } from 'react';
import { db } from './../firebase/firebaseConfig';
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns';
import { useAuth } from './../contextos/AuthContext';
import { collection, onSnapshot, query, orderBy, where, getDocs } from 'firebase/firestore';

const useObtenerGastosMes = () => {
  const [gastos, establecerGastos] = useState([]);
  const { usuario } = useAuth();

  useEffect(() => {
    const obtenerGastosMes = async () => {
      if (usuario) {
        const inicioMes = getUnixTime(startOfMonth(new Date()));
        const finMes = getUnixTime(endOfMonth(new Date()));

        const consulta = query(
          collection(db, 'gastos'),
          orderBy('fecha', 'desc'),
          where('fecha', '>=', inicioMes),
          where('fecha', '<=', finMes),
          where('uidUsuario', '==', usuario.uid)
        );

        try {
          const snapshot = await getDocs(consulta);
          const nuevosGastos = snapshot.docs.map((documento) => ({
            ...documento.data(),
            id: documento.id,
          }));
          establecerGastos(nuevosGastos);
        } catch (error) {
          console.error('Error al obtener los gastos:', error);
        }
      }
    };

    obtenerGastosMes();
  }, [usuario]);

  return gastos;
};

export default useObtenerGastosMes;
