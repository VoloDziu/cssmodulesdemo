import React from 'react';
import styles from './App.module.scss';

import Panel from '../Panel/Panel';
import {FormFieldGroup, FormField} from '../FormField/FormField';
import {LayoutColumns, LayoutColumnsItem} from '../LayoutColumns/LayoutColumns'; 
import HeightBox from '../HeightBox/HeightBox';

const App = () => {
  return (
    <div className={styles.component}>
      <div className={styles.body}>
        <div className={styles.panel}>
          <Panel>
            <FormFieldGroup>
              <FormField label="Group 1">
                <HeightBox>
                  <input type="text"/>
                </HeightBox>

                <HeightBox>
                  <label>
                    <input type="checkbox"/> Checkbox here
                  </label>
                </HeightBox>

                <LayoutColumns space="2">
                  <LayoutColumnsItem space="2">
                    <HeightBox>
                      <input type="text"/>
                    </HeightBox>
                  </LayoutColumnsItem>

                  <LayoutColumnsItem space="2">
                    <HeightBox>
                      <input type="text"/>
                    </HeightBox>
                  </LayoutColumnsItem>

                  <LayoutColumnsItem space="2">
                    <HeightBox>
                      <input type="text"/>
                    </HeightBox>
                  </LayoutColumnsItem>
                </LayoutColumns>
              </FormField>

              <FormField label="Group 2">
                <HeightBox>
                  <input type="text"/>
                </HeightBox>

                <LayoutColumns space="1">
                  <LayoutColumnsItem space="1">
                    <HeightBox>
                      <input type="text"/>
                    </HeightBox>
                  </LayoutColumnsItem>

                  <LayoutColumnsItem space="1">
                    <HeightBox>
                      <input type="text"/>
                    </HeightBox>
                  </LayoutColumnsItem>
                </LayoutColumns>
              </FormField>
            </FormFieldGroup>
          </Panel>
        </div>

        <div className={styles.panel}>
          <Panel>
          <FormField label="Group 3">
                <HeightBox>
                  <input type="text"/>
                </HeightBox>

                <LayoutColumns space="3">
                  <LayoutColumnsItem space="3">
                    <HeightBox>
                      <input type="text"/>
                    </HeightBox>
                  </LayoutColumnsItem>

                  <LayoutColumnsItem space="3">
                    <HeightBox>
                      <input type="text"/>
                    </HeightBox>
                  </LayoutColumnsItem>
                </LayoutColumns>
              </FormField>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default App;
