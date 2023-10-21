import { FR, US } from "country-flag-icons/react/3x2"

export function renderFlag(locale: string) {
  let Flag
  let country
  switch (locale) {
    case "en":
      Flag = US
      country = "English"
      // country = COUNTRIES.US
      break
    case "fr":
      Flag = FR
      country = "French"
      // country = COUNTRIES.FR
      break
    // case "es":
    //   Flag = ES
    //   country = "Spanish"
    //   // country = COUNTRIES.ES
    //   break
    // case "it":
    //   Flag = IT
    //   country = "Italian"
    //   // country = COUNTRIES.IT
    //   break
    // case "de":
    //   Flag = DE
    //   country = "German"
    //   // country = COUNTRIES.DE
    //   break
    // case "pt":
    //   Flag = PT
    //   country = "Portuguese"
    //   // country = COUNTRIES.PT
    //   break
    default:
      Flag = US
      country = "English"
    // country = COUNTRIES.US
  }

  return (
    <div className="flex items-center">
      <Flag className="h-4 w-4" title={country} />
      <span className="ml-2">{country}</span>
    </div>
  )
}

// REfactored version but with an any type
// import COUNTRIES from "@/utils/countries"
// import * as CountryIcons from "country-flag-icons/react/3x2"

// export function renderFlag(locale: string) {
//   const localeUpperCase = locale.toUpperCase()
//   const Icon = (CountryIcons as any)[localeUpperCase] || CountryIcons.US
//   const title =
//     COUNTRIES[localeUpperCase as keyof typeof COUNTRIES] || "English"

//   return <Icon className="h-4 w-4" title={title} />
// }
