import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { type Voronoi, columns } from "../voronoi/columns";
import { DataTable } from "../voronoi/data-table";

interface APIProps {
  table: string;
  columns: string;
}

const APIData = (props: APIProps) => {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [players, setPlayers] = useState<any>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase
        .from(props.table)
        .select(props.columns);

      if (error) {
        setFetchError("Could not fetch the data");
        setPlayers(null);
        console.log(error);
      }
      if (data) {
        setPlayers(data);
        setFetchError(null);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {players && (
        <div className="w-full mx-auto">
          <DataTable columns={columns} data={players} />
        </div>
      )}
    </div>
  );
};

export default APIData;
