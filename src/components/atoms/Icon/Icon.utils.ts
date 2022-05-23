// benefit
import DollarImage from '../../../../public/images/benefit/dollar.svg'
import EnvelopeImage from '../../../../public/images/benefit/envelope.svg'
import GualityImage from '../../../../public/images/benefit/guality.svg'
import ModulesImage from '../../../../public/images/benefit/modules.svg'
import ToolImage from '../../../../public/images/benefit/tool.svg'
import VectorImage from '../../../../public/images/benefit/vector.svg'

// common
import CloseImage from '../../../../public/images/common/close.svg'
import DomainImage from '../../../../public/images/common/domain.svg'
import GamepadImage from '../../../../public/images/common/gamepad.svg'
import GraphicsImage from '../../../../public/images/common/graphics.svg'

import HouseImage from '../../../../public/images/common/house.svg'
import MotherboardImage from '../../../../public/images/common/motherboard.svg'
import ProcessorImage from '../../../../public/images/common/processor.svg'
import RamImage from '../../../../public/images/common/ram.svg'
import StarImage from '../../../../public/images/common/star.svg'
import VideocardImage from '../../../../public/images/common/videocard.svg'
import WorkImage from '../../../../public/images/common/work.svg'

// navLinks
import CallImage from '../../../../public/images/navLinks/call.svg'
import CatalogImage from '../../../../public/images/navLinks/catalog.svg'
import DeliveryImage from '../../../../public/images/navLinks/delivery.svg'
import HomeImage from '../../../../public/images/navLinks/home.svg'

// social
import FacebookImage from '../../../../public/images/social/facebook.svg'
import GithubImage from '../../../../public/images/social/github.svg'
import TelegramImage from '../../../../public/images/social/telegram.svg'
import TwitterImage from '../../../../public/images/social/twitter.svg'
import VKImage from '../../../../public/images/social/vkontakte.svg'

import { Icons } from './Icon.types'

export const ICONS: Record<Icons | string, string> = {
  [Icons.telegram]: TelegramImage,
  [Icons.facebook]: FacebookImage,
  [Icons.vkontakte]: VKImage,
  [Icons.twitter]: TwitterImage,
  [Icons.github]: GithubImage,
  // common
  [Icons.gamepad]: GamepadImage,
  [Icons.work]: WorkImage,
  [Icons.house]: HouseImage,
  [Icons.star]: StarImage,
  [Icons.domain]: DomainImage,
  [Icons.graphics]: GraphicsImage,
  // details
  [Icons.processor]: ProcessorImage,
  [Icons.motherboard]: MotherboardImage,
  [Icons.videocard]: VideocardImage,
  [Icons.ram]: RamImage,
  [Icons.close]: CloseImage,
  // navLinks
  [Icons.call]: CallImage,
  [Icons.catalog]: CatalogImage,
  [Icons.delivery]: DeliveryImage,
  [Icons.home]: HomeImage,
  // benefit
  [Icons.dollar]: DollarImage,
  [Icons.guality]: GualityImage,
  [Icons.tool]: ToolImage,
  [Icons.modules]: ModulesImage,
  [Icons.vector]: VectorImage,
  [Icons.envelope]: EnvelopeImage
}

export const getIcon = (name: Icons | string) => {
  return ICONS[name]
}
