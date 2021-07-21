import React from 'react';

import { Tooltip } from '../Tooltip';
import { Button } from '../Button';

import { InputTableProps, ButtonText, ButtonType } from '../../shared';
import { useTableData } from './hooks';

import styles from './InputTable.scss';

export const InputTable: React.VFC<InputTableProps> = ({
  columnDefs,
  rowCount,
  title,
  onSubmit
}: InputTableProps) => {
  const {
    data,
    errors,
    handleClear,
    handleFileDrop,
    handleInputBlur,
    handleInputChange,
    handleKeyPress,
    handlePaste,
    handleSubmitClick
  } = useTableData({ columnDefs, rowCount });
  return (
    <React.Fragment>
      <div className={styles.tableContainer}>
        <header>
          <h3>{title}</h3>
        </header>
        <table onDrop={handleFileDrop} onPaste={handlePaste}>
          <thead>
            <tr>
              {columnDefs.map(({ headerName }) => (
                <th key={headerName}>{headerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rowCount }, (_, index: number) => (
              <tr key={index}>
                {columnDefs.map(({ fieldName }) => {
                  const errorMessage = errors[index][fieldName];
                  return (
                    <td
                      key={fieldName}
                      className={errorMessage ? styles.error : ''}
                    >
                      <input
                        name={fieldName}
                        value={data[index]?.[fieldName] ?? ''}
                        onBlur={handleInputBlur({ fieldName, index })}
                        onChange={handleInputChange(index)}
                        onKeyPress={handleKeyPress}
                      />
                      {errorMessage && <Tooltip message={errorMessage} />}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={handleClear} styleType={ButtonType.Secondary}>
          {ButtonText.Clear}
        </Button>
        <Button onClick={handleSubmitClick.bind(undefined, onSubmit)}>
          {ButtonText.Submit}
        </Button>
      </div>
    </React.Fragment>
  );
};
