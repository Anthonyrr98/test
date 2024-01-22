import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Homepage.module.css';

interface Props {
  className?: string;
}
/* @figmaId 4368:321106 */
export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.weReFarmersPurveyorsAndEatersO}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>We’re </span>
          <span className={classes.label2}>farmers</span>
          <span className={classes.label3}>, </span>
          <span className={classes.label4}>purveyors</span>
          <span className={classes.label5}>, and </span>
          <span className={classes.label6}>eaters</span>
          <span className={classes.label7}> of organically grown food.</span>
        </p>
      </div>
      <button className={classes.button}>
        <div className={classes.browseOurShop}>Browse our shop</div>
      </button>
      <div className={classes.weBelieveInProduceTastyProduce}>
        <div className={classes.textBlock}>We believe in produce. Tasty produce. Produce like:</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
        <div className={classes.textBlock3}>
          Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots.
          Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli.
          Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.{' '}
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
        <div className={classes.textBlock5}>What are we forgetting?</div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
        <div className={classes.textBlock7}>
          Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to
          aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins).
          Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this
          website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives.
          Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe
          what escaroles are...
        </div>
      </div>
      <div className={classes.wHATWEBELIEVE}>WHAT WE BELIEVE</div>
      <div className={classes.jonathanKemper1HHrdIoLFpUUnspl}></div>
      <div className={classes.centralCaliforniaThePersonWhoG}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label8}>Central California</span>
          <span className={classes.label9}>
            {' '}
            — The person who grew these was located in Central California and, er, hopefully very well-compensated.
          </span>
        </p>
      </div>
      <div className={classes.header}>
        <div className={classes.worldPeas}>World Peas</div>
        <div className={classes.shop}>Shop</div>
        <div className={classes.newstand}>Newstand</div>
        <div className={classes.whoWeAre}>Who we are</div>
        <div className={classes.myProfile}>My profile</div>
        <button className={classes.cartButton}>
          <div className={classes.basket3}>Basket (3)</div>
        </button>
      </div>
      <div className={classes.stocksy_txp226f62b2aNe300_Medi}></div>
    </div>
  );
});
