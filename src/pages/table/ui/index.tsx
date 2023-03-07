import { Table } from "features/table";
import { useContext, useState } from "react";
import { Modal } from "features/modal";
import { validateNumber } from "shared/lib/helpers";
import { TableContext } from "shared/config";
import { InputNumber } from "shared/lib/ui";

const TablePage = () => {
  const { tableSizes, setTableSizes } = useContext(TableContext);
  const [settingsIsOpen, setSettingsIsOpen] = useState<boolean>(false);
  const [limitNearest, setLimitNearest] = useState({
    x: tableSizes.x,
  });

  return (
    <>
      <Table setSettingsIsOpen={setSettingsIsOpen} />
      <Modal
        modalContent={
          <div>
            <InputNumber
              title="Enter limit of nearest numbers"
              onChange={(e) =>
                setLimitNearest({
                  x: validateNumber(e.target.value, limitNearest.x),
                })
              }
              value={limitNearest.x}
            />
          </div>
        }
        onSubmit={() => {
          setTableSizes({ ...limitNearest, m: tableSizes.m, n: tableSizes.n });
          setSettingsIsOpen(false);
        }}
        isOpen={settingsIsOpen}
        setIsOpen={setSettingsIsOpen}
      />
    </>
  );
};

export default TablePage;
